
export const addCart=(product)=>{
return(
    type:'ADDITEM',
    payload:product
)
}

export const delCart=()=>{
    return(
        type:'DELITEM',
        payload:product
    )
}
