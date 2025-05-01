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

type FormType = "sign-in" | "sign-up";