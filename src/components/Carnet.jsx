import React from 'react'
import './carnet.css'
import image from '../assets/image/Capture d’écran 2023-05-25 193703.png'

function carnet() {
  return (
    <div className='container'>
        <div className='content'>
            <div className='right'>
                <div className='title'>
                    <span><strong>Miamie Marlins at Boston Red Sox</strong></span>
                </div>
                <div className='image'>
                    <img src= {image} alt="" />
                </div>
                <div className='date'>
                    
                    <div className='jour'>
                    <strong>27<br />JUIN<div>2023</div></strong>
                    </div>
                    <div className='info_carnet'>
                    <div className='info'>
                    <span>MAR.&nbsp;<strong>19:10</strong></span>
                    <div>Fenway Park <br /> Boston, Massachusette, Etats-unis </div>
                    </div>
                    </div>
                    

                </div>
            </div>
            <div className='left'>
                <div>
                <div>Bon pour</div>
                <strong>2</strong>
                </div>
                <div>
                <div>Blog</div> 
                <strong>L36</strong> 
                </div>
                <div>
                <div> Rang</div>
                <strong>21</strong>
                </div>
                <div>
                <div> Places</div>
                <span>17-18</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default carnet