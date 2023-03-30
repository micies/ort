from firebase_admin import firestore
import datetime


class Base_service:
    def __init__(self, collection_name):
        self.collection_name = collection_name
        self.db = firestore.client()

    def get(self):  # sourcery skip: raise-specific-error

        try:
            collection = self.db.collection(self.collection_name).stream()

            if items := [item.to_dict() for item in collection]:
                return {'items': items}

            else:
                raise Exception('Not Found')

        except Exception as e:
            raise (e, 400) from e

    def get_by_id(self, id):

        try:
            collection = self.db.collection(self.collection_name).document(id).get()

            if not collection:
                raise Exception('Not Found')

            return collection.to_dict()

        except Exception as e:
            raise e

    def post(self, my_data):
        try:
            today = datetime.datetime.now()
            doc_ref = self.db.collection(self.collection_name).document()
            my_data = my_data.dict()
            my_data.update({"today": today, "id": doc_ref.id})
            doc_ref.set(my_data)
            return my_data
        except Exception as e:
            raise e

    def put(self, id, my_data):
        try:
            print(my_data)
            my_data = my_data.dict()
            if 'id' in my_data:
                del my_data['id']
            collection = self.db.collection(self.collection_name).document(id).update(my_data)
            if not collection:
                raise Exception('Not Found')
            return {"id": id, "massage": f'{id} is update {my_data}'}
        except Exception as e:
            raise e

    def delete(self, id):
        try:
            collection = self.db.collection(self.collection_name).document(id).delete()
            if not collection:
                raise Exception('Not Found')
            return f'{id}  deleted'
        except Exception as e:
            raise e
