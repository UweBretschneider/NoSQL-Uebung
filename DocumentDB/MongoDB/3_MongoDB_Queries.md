# MongoDB Abfragen
MongoDB verwendet eine an JavaScript angelehnte Sprachsyntax. Dies ist besonders für Web-Entwickler sehr intuitiv. 

Es bietet sich an, Queries in einer IDE, wie z.B. VSCode zu entwicklen und zu verwalten. Für die Übung sind Beispielqueries in diesem Repository hinterlegt:
- [CRUD Operationen](Queries/1_mongo_db_crud.js)
- [Queries](Queries/2_mongo_db_queries.js)

## Abfragen
Typische Abfragestile sind:
- Liefere ein Dokument gegeben ein Schlüsselwert (häufig Hash über Dokument-Inhalt)
- Liefere alle Dokumente einer Collection

Die find() Funktion wird für Query-Operationen verwendet. Als Argumente werden
- Query-Predicates sowie
- Field-Projektionen erwartet.
Wird nur ein Resultat erwartet, kann findOne() verwendet werden.

> **_Aufgabe 3.1:_** Formulieren Sie Abfragen, um jeweils 5 Einträge der Collection movies und users zu selektieren. Formulieren Sie weiterhin Abfragen, um die Gesamtzahl der Records beider Collections zu ermitteln.


## Parametrisierte Abfragen
> **_Aufgabe 3.2:_** Betrachten Sie folgende Beispielabfragen. Warum liefert die zweite Abfrage keine Resultate?

```
// find movies with release year 2020
db.movies.find({"release_year": 2020})

// why does this query yields no results?
db.movies.find({"release_year": "2020"})
```

## Projektionen mittels Template Dokumenten


## Komplexe Abfragen


# MongoDB Insert Operationen
Die Befehle insertOne und save führen beide dazu, dass ein Objekt persistiert wird.

Modifizierende Operationen können zusammen mit Query Operationen verwendet werden: findAndModify() sucht ein Objekt und modifiziert es in einer Operation. Analog existiert findOneAndDelete()