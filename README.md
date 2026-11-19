# 50 Años de Amor – komplette Geburtstagswebsite

Diese Version verbindet die drei bisherigen Konzepte: Vintage-Fotoalbum, Timeline, 50 Gründe, Foto-Rätsel, grosse Fotowand, Geburtstagskärtchen, Umschläge, Musik/Video, persönlicher Brief und Überraschung.

## Start
1. ZIP entpacken.
2. Den Inhalt in dein GitHub-Repository hochladen.
3. GitHub Pages wie bisher aktivieren.
4. Fotos und Medien in den vorgesehenen Ordnern ersetzen.

## Fotos
Die Dateien in `assets/photos/` mit euren eigenen Bildern ersetzen und die Dateinamen exakt beibehalten:
- `mama-portrait.jpg` – Titelbild
- `timeline-1976.jpg`, `timeline-childhood.jpg`, `timeline-youth.jpg`, `timeline-family.jpg`, `timeline-today.jpg` – Timeline
- `wall-01.jpg` bis `wall-20.jpg` – grosse Fotowand
- `quiz-1.jpg` bis `quiz-3.jpg` – Foto-Jahresrätsel
- `video-poster.jpg` – Vorschaubild für Film

Du kannst die 20 Fotowand-Bilder mit weiteren `figure`-Elementen in `index.html` erweitern.

## Persönliche Inhalte ändern
- `script.js`: oben `SITE_PASSWORD` ändern.
- `script.js`: Liste `reasons` anpassen – das sind die 50 Gründe.
- `script.js`: unter `const quizzes` die Bilddateien, richtigen Jahreszahlen und Antwortmöglichkeiten anpassen.
- `index.html`: Timeline-Texte, Brief, Kärtchen und Umschlag-Nachrichten direkt ändern.

## Musik und Video
- Musikdatei als `assets/media/song.mp3` speichern.
- Video als `assets/media/film.mp4` speichern.
- Browser spielen Musik erst nach einem Klick ab.

## Wichtig zum Passwort
Bei GitHub Pages ist das Passwort nur eine einfache Eingangssperre. HTML, JavaScript und Bilder können weiterhin öffentlich erreichbar sein. Für wirklich private Fotos brauchst du Hosting mit echter Anmeldung/Zugriffsschutz. Lade keine sehr privaten Bilder in ein öffentliches Repository.
