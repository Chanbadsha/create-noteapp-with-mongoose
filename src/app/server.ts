import { Server } from 'http'
import app from './app'
import mongoose from 'mongoose'
const port = 5000
let server: Server


async function main() {

    try {
        await mongoose.connect('mongodb+srv://nextLevelUser:nextLevelUser@cluster0.t47d6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        server = app.listen(port, () => {
            console.log(`The server is running on port ${port}`)
        })

    } catch (error) {
        console.log(error)
    }

}


main()