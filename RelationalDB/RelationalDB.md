## Relationale Datenbank
Relationen sind zweidimensionale Strukturen, die strukturell gleichartige Individuen in Form einer Tabelle zusammenfassen. Jede Zeile entspricht einem Individum (Record, Tuple).
Individuen sind typischerweise eindeutig über einen Primärschlüssel referenzierbar (es gibt Ausnahmen, z.B. Ladetabellen). Relationen sind über Beziehungen in Form von (Fremd-)Schlüsseln miteinander verbunden.

Relationale Datenbanken bieten viele etablierte Funktionalitäten, die direkt in dem DBMS umgesetzt sind (Meier & Kaufmann (2019), S. 201):
- Umfangreiche und mächtige deklarative Sprach-Konstrukte
- Unterstützung von Schemata und Metadaten
- Konsistenzsicherung
- Referentielle Integrität und Trigger
- Recovery und Logging
- Mehrbenutzerbetrieb und Synchronisierung
- Nutzer, Rollen und Sicherheit
- Indexierung

# Produktübersicht

## MySQL
Beispiel MySQL in Version 8. 

## Postgres




These SQL functionalities offer numerous benefits regarding data consistency and security.
This goes to show that SQL databases are mainly designed for integrity and transaction
protection, as required in banking applications or insurance software, among others.
However, since data integrity control requires much work and processing power, relational
databases quickly reach their limits with large amounts of data. The powerfulness
of the database management system is disadvantageous for efficiency and performance,
as well as for flexibility in data processing.