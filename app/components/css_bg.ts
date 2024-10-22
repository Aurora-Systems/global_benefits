export const bg_img=(img_src:string)=>{
    return(
        {
            backgroundImage:`url(${img_src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    )
}