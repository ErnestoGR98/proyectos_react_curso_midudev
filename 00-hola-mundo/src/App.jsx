import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
{
  userName: 'ernestoglez',
  name: 'Ernesto González Ruiz',
  isFollowing: true
},
{
  userName: 'ricardo',
  name: 'Ricardo Jaramillo',
  isFollowing: true
},
{
  userName: 'Javier123',
  name: 'Javier Fonseca',
  isFollowing: false
},
]

export function App() {
  return (
    <section className="App">
      {
        users.map(user => {
          const{userName, name, isFollowing} = user
          return(
            <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>

          )
        })
      }
    </section>
  )
}