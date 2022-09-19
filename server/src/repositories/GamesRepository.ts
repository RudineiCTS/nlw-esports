import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient({
  log:['query']
})

class GamesRepository{
  
  async getAllGames(){
    const games = prisma.game.findMany({ 
      include:{
        _count:{
          select:{
            Ads:true,
          }
        }
      }
    })

    return games
  }
}

export default GamesRepository


