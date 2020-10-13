export default interface ProductProps {
    id: string,
    userId?: string,
    title: string,
    description: string,
    imageUrl: string,
    bannerImgUrl?: string,
    price: number
}