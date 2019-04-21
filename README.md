# node-rest-postgres
## Very simple REST api implemented with Node.js, Express and PostgresQL.

Use the Express and pg modules in node.

The database is a single table, "item", with three fields, "id" (auto generated), "name" and "notes".

To run the web server: 
```
node index.js
```

To view a list of all items, go to 
http://localhost:3000/items

To see single item with id=4: 
http://localhost:3000/items/4

To add an item
```
# curl --data "name=Tester&notes=very, very testy" http://localhost:3000/items
```

To update item with id=9
```
# curl -X PUT -d "name=FatCat" -d "notes="blah"  http://localhost:3000/items/9
```

To delete item with id=7
```
# curl -X DELETE http://localhost:3000/items/7
```