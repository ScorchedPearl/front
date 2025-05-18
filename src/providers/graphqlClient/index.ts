import { GraphQLClient }from "graphql-request";
const isClient= typeof window !== 'undefined'
export const graphqlClient= new GraphQLClient("http://pearlpost-back.pearl99z.tech:8000/graphql",{
  headers:()=>({
    Authorization: isClient? `Bearer ${window.localStorage.getItem("__Pearl_Token")}`:"",
  })
});