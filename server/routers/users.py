from fastapi import APIRouter
from schemas.users import Users
from firebase_admin import firestore
from Base_service import Base_service
import datetime

import pathlib

p = pathlib.Path(__file__)

users = APIRouter()

collection_name = "users"


@users.get("/users")
async def get_all():
    try:
        return Base_service(collection_name).get(), 200
    except Exception as e:
        if str(e) == 'Not Found':
            return (404, e), 404


@users.get("/users/{item_id}")
async def get_by_id(item_id):
    try:
        if Base_service(collection_name).get_by_id(item_id) != None:
            return Base_service(collection_name).get_by_id(item_id), 200
    except Exception as e:
        if str(e) is None:
            return (404, e), 404


@users.post("/users")
async def create_user(items: Users):
    try:
        return Base_service(collection_name).post(items), 201
    except Exception as e:
        return (400, e)


@users.put("/users/{item_id}")
async def update_user(items: Users, item_id):
    try:
        return Base_service(collection_name).put(item_id, items), 201

    except Exception as e:
        print(e)
        return (400, e)


@users.delete("/users/{item_id}")
def delete_user(item_id):  # sourcery skip: raise-specific-error
    try:
        if not item_id:
            raise Exception('Missing item id')
        return Base_service(collection_name).delete(item_id), 200

    except Exception as e:
        return (400, e)

