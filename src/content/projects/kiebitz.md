---
title: Kiebitz
summary: A fast, native macOS chess app for opening preparation and training.
when: "2026"
context: Personal project
tech: [C++20, Qt 6, CMake, SQLite, GoogleTest, GitHub Actions]
order: 1
links:
  - { label: Website and download, url: "https://lukas-ott.github.io/kiebitz/" }
  - { label: Source on GitHub, url: "https://github.com/lukas-ott/kiebitz" }
---

Kiebitz is a chess app for the Mac, made for building opening repertoires and training them. Its
main goal is speed: the app, a file and a database of millions of games should all open in under
a second.

## What it does

- A board and PGN editor with variations, comments, arrows and clocks.
- Repertoire practice: the app plays the opponent's moves and you answer from memory, with a
  check for common replies the repertoire doesn't cover yet.
- Game databases and an opening explorer over millions of games, plus Lichess's and the masters'
  games and the endgame tablebase.
- The Lichess puzzle database, a daily training plan, and profiles that collect a player's
  online and over-the-board games.
- Stockfish analysis, and English, German and Norwegian.

## How it's built

- C++20 with Qt 6 Widgets, licensed under the GPL-3.0.
- The chess logic, PGN reading and writing, UCI engine communication and the SQLite-backed game
  databases are separate modules without any Qt, so they can be built and tested on their own.
- Unit tests and UI tests with GoogleTest; move generation is checked with perft, and
  performance-sensitive code has benchmarks.
- GitHub Actions builds and tests every change and packages a self-contained `.dmg`. Releases
  0.1 to 0.3 are published as pre-releases for Apple silicon.
