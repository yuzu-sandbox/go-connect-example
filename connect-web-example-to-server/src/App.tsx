import {useEffect, useState} from "react"
import {createConnectTransport, createPromiseClient} from '@bufbuild/connect-web'
import {GreetService} from '../gen/greet/v1/greet_connectweb'

const transport = createConnectTransport({
  baseUrl: 'http://localhost:8080'
})
const client = createPromiseClient(GreetService, transport)

function App() {
  const [state, setState] = useState("hello")

  useEffect(() => {
    const f = async () => {
      const res = await client.greet({name: 'alice'})
      setState(() => res.greeting)
    }
    f().catch((e) => {
      setState(() => e.toString())
    })
  }, [])

  return <><h1>{state}</h1></>
}

export default App
