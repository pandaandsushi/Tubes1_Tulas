# Tulas presents... Diamond Bot Using Greedy Algorithm 💎🤖

| Names                  | NIM      |
| ---------------------- |:--------:|
| Thea Josephine Halim   | 13522012 |
| Melati Anggraini       | 13522035 |
| Hayya Zuhailii Kinasih | 13522102 |

## Table of Contents 💫
* [The Game](#description-👾)
* [The Algorithm](#greedy-algorithm-🎈)
* [Requirements](#requirements-🫧)
* [Setting Up](#setting-up-🍀)
* [Usage](#how-to-run-🌿)

## Description 👾
Diamond Bot Game, a simple web based where we try to create a bot logic and try to compete to get the highest score by collecting as many diamonds as we can. 

The features in this game:
- Collect diamonds as many as you can
- Avoid other bots to prevent getting tackled or..
- Attack other bots and steal it's diamonds
- Use teleporters to take a quick shortcut
- Press the red button to reset all diamonds

## Greedy Algorithm 🎈
Greedy Algorithm focuses on making decisions and choosing the option that is clearly the most profitable at the moment without considering future consequences in the hope that each step will bring one closer to the most final optimal solution. We uses greedy by distance and profit to collect as many diamonds as possible. THe bot will set it's goal position to the most optimum diamond, and began to move to it's position. In the meantime, it will try to avoid other bots as much as it could to prevent getting tackled, and attack others if necessary. Bot will also use a teleport if it's more efficient or pressing the red button if there aren't many diamonds laying around.

## Requirements 🫧
- Python from `https://www.python.org/downloads/`
- Node.js from `https://nodejs.org/en`
- Docker desktop from `https://www.docker.com/products/docker-desktop/`
- Yarn by using `npm install --global yarn`

## Setting Up 🍀
- Clone this repository on your terminal `git clone https://github.com/pandaandsushi/Tubes1_Tulas.git`
- Install all requirements

## How to Run 🌿
- Open the docker installed
- Open the cloned file on VSCode
- Open a terminal and set it's directory to `\src\tubes1-IF2211-game-engine-1.1.0`
- Type in `npm run build` then `npm run start` to start the server and open the server `http://localhost:8082/` in your local browser
- Open another terminal and set it's directory to `\tubes1-IF2211-bot-starter-pack-1.0.1`
- Open `run-bots.bat` inside ..`\Tubes1_Tulas\src\tubes1-IF2211-bot-starter-pack-1.0.1\run-bots.bat`
- If you want to change the logic used, the names of the bots, or the number of bots playing, change the `run-bots.bat`. Every line represents a bot so you may change that up to your reference.
- Click the `Run Code` button inside the `run-bots.bat file` or `Ctrl + Alt + N`
- Enjoy the game :3


## Thankyou for trying our bot :>