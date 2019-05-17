from flask import Flask, request, Response
from flask_restful import Resource, Api
from pymongo import MongoClient
from bson import json_util, ObjectId

import json

client = MongoClient()
db = client['admin']

app = Flask(__name__,)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return 
        # return {'about': 'Hello World!'}
    
    def post(self):
        some_json = request.get_json()

        collection = db['Content']
        insert_id = collection.insert_one(some_json).inserted_id
        return {'insert_id': str(insert_id)}, 201
    
class Multi(Resource):
    def get(self, num):
        return {'result': num*10}

class Page(Resource):
    def get(self, objectID):
        mydoc = [x for x in db['Content'].find({"_id" : ObjectId(objectID)})]

        return Response(json.dumps(mydoc, default=json_util.default), mimetype='application/json')
        

# api.add_resource(HelloWorld, '/')
api.add_resource(HelloWorld, '/')
api.add_resource(Multi, '/multi/<int:num>')
# edit the int:num after /page to match the page
api.add_resource(Page, '/page/<string:objectID>')

if __name__ == '__main__':
    app.run(port=5001, debug=True)