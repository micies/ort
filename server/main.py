from fastapi import FastAPI
from routers.users import users
from starlette.middleware.sessions import SessionMiddleware
from firebase_admin import  firestore, storage, auth
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(SessionMiddleware ,secret_key='maihoonjiyan')


import firebase_admin
from firebase_admin import credentials




if not firebase_admin._apps:
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)


allow_all = ['*']
app.add_middleware(
   CORSMiddleware,
   allow_origins=allow_all,
   allow_credentials=True,
   allow_methods=allow_all,
   allow_headers=allow_all
)
origins = [
    "http://localhost:3000",
    ]
app.include_router(users)


@app.get("/")
def read_root():
    db = firestore.client()
    doc_ref = db.collection('user').document()
    doc_ref.set({
        'first': 'Barrack',
        'last': 'Obama',
        'born': 1815123132132
    })
    return {"message": "welcome to FastAPI!"}

if __name__ == "__main__":
   uvicorn.run("main:app")

#sudo /opt/lampp/lampp start


#source venv/bin/activate
# run => uvicorn index:app --reload
#dockefile => uvicorn index:app --reload
