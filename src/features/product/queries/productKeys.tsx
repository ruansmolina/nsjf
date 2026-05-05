export const productKeys = {
    all:["products"] as const,
    lists: () =>[... productKeys.all] as const,
    list:(filter?:string)=>[... productKeys.lists(),filter] as const
    
}