import imageRouter from './images'

export default function (app: any) {

  app.use("/api/images", imageRouter)

}