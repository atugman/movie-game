import React from 'react'
import StartButton from './StartButton'
import './Homepage.css'
import './Deadpool.jpg'

const Homepage = () => (
  <div>
    <img className="Background" src={require('./Deadpool.jpg')}></img>
    <form>
      <table className="homepage-table">
        <tbody>
          <tr>
            <th>The Movie Game</th>
          </tr>
          <tr>
            <td className="homepage-td">The Movie Game reminds you of your favorite movies while testing your knowledge of specific Hollywood films.</td>
          </tr>
          <tr>
            <td className="homepage-td">Those who haven't seen many movies should use it as a fun way to learn about new films!</td>
          </tr>
          <tr>
            <td className="homepage-td last-td">So sit back, relax, and enjoy the game!</td>
          </tr>
          <tr>
            <td className='homepage-box'>
              <StartButton />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
)

export default Homepage
