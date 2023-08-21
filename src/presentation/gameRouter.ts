import express from 'express'
import { DARK, INITIAL_BOARD } from '../application/constants'
import { connectMySQL } from '../dataaccess/connection'
import { GameGateway } from '../dataaccess/gameGateway'
import { SquareGateway } from '../dataaccess/squareGateway'
import { TurnGateway } from '../dataaccess/turnGateway'
import { GameServcie } from '../application/gameService'

export const gameRouter = express.Router()

const gameServcie = new GameServcie()

gameRouter.post('/api/games', async (req, res) => {
  await gameServcie.startNewGame();
  res.status(201).end()
})
