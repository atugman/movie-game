import React from 'react'
import StartButton from './StartButton'
import './Homepage.css'

const Homepage = () => (
  <div>
    <form>
      <table className="homepage-table">
        <tbody>
          <tr>
            <th>The Movie Game</th>
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
