import React from 'react';
import Apple from './images/Apple.jpg';
import Play from './images/Play.jpg';
import laundry from './images/laundry.png';

const MyComponent = () => {
  return (
    <div>
      {/* Rectangle 1276 */}
      <div
        style={{
          position: 'absolute',
          width: '1440px',
          height: '972px',
          left: '0px',
          top: '3387px',
          background: '#C4C4C4',
        }}
      ></div>

      {/* Design */}
      <div
        style={{
          position: 'absolute',
          width: '82px',
          height: '28px',
          left: '139px',
          top: '3462px',
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '28px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        Design
      </div>

      {/* User Friendly App */}
      <div
        style={{
          position: 'absolute',
          width: '421px',
          height: '57px',
          left: '139px',
          top: '3494px',
          fontFamily: 'Rubik',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '48px',
          lineHeight: '57px',
          textTransform: 'capitalize',
          color: '#010101',
        }}
      >
        User Friendly App
      </div>

      {/* Lorem ipsum dolor sit amet... */}
      <div
        style={{
          position: 'absolute',
          width: '608px',
          height: '60px',
          left: '139px',
          top: '3566px',
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '30px',
          textTransform: 'capitalize',
          color: '#010101',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      {/* Rectangle 17 */}
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '165px',
          height: '48px',
          left: '139px',
          top: '3641px',
          background: '#FFFFFF',
          border: '1px solid #6759FF',
          borderRadius: '4px',
        }}
      ></div>


      {/* Apple Store */}
      <div
        style={{
          position: 'absolute',
          width: '95px',
          height: '24px',
          left: '189px',
          top: '3654px',
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'right',
          color: '#0E1133',
        }}
      >
        Apple Store
      </div>

      {/* Rectangle 3 */}
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '165px',
          height: '48px',
          left: '323px',
          top: '3641px',
          background: '#FFFFFF',
          border: '1px solid #6759FF',
          borderRadius: '4px',
        }}
      ></div>

      
      
      {/* Play Store */}
      <div
        style={{
          position: 'absolute',
          width: '81px',
          height: '24px',
          left: '378px',
          top: '3654px',
          fontFamily: 'Red Hat Display',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'right',
          color: '#0E1133',
        }}
      >
        Play Store
      </div>
      
      {/* Apple image */}
      <div style={{ position: 'absolute', width: '18.07px', height: '22.18px', left: '163px', top: '3654px', background: '#6759FF' }}>
        <img src={Apple} alt="Apple" style={{ width: '100%', height: '100%' }} />
      </div>
      
      {/* Play image */}
      <div style={{ position: 'absolute', width: '18px', height: '20.37px', left: '349px', top: '3655px', background: '#6759FF' }}>
        <img src={Play} alt="Play" style={{ width: '100%', height: '100%' }} />
      </div>
      
      {/* laundry image */}
      <div style={{ position: 'absolute', width: '1440px', height: '972px', left: '0px', top: '3387px', }}>
        <img src={laundry} alt="laundry" style={{ width: '100%', height: '100%' }} />
      </div>

    </div>
  );
}

export default MyComponent;
