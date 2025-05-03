interface Icon {
  size: number,
  color: string,
  style?: string
}
interface ImageDetailProps {
  prompt: string,
  image: string,
  ratio: string
}
interface RegenerateProps {
  prompt:string,
  ratio:string,
  size: {
    width: number,
    height:number
  }
}

type FormType = "sign-in" | "sign-up";