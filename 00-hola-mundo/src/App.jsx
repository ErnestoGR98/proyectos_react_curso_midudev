import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="ernestoglez" >
        Ernesto González Ruiz
      </TwitterFollowCard>
      <TwitterFollowCard userName="ricardo"  >
        Ricardo Jaramillo
      </TwitterFollowCard>
      <TwitterFollowCard userName="Javier"  >
        Javier Fonseca
      </TwitterFollowCard>

    </section>
  )
}