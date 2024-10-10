export function Overlay() {
    return (
      <>
        <div style={{ position: 'absolute', top: 40, right: 160, fontSize: '15px', textAlign: 'right' }}>
          A DEV
          <br />
          COLLECTIVE
        </div>
        <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '15px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
          —
          <br />
          10/10/24
        </div>
        <svg style={{ position: 'absolute', right: 40, top: '50%' }} width="54" height="23" viewBox="0 0 54 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1.5" x2="54" y2="1.5" stroke="black" strokeWidth="3" />
          <line y1="11.5" x2="54" y2="11.5" stroke="black" strokeWidth="3" />
          <line y1="21.5" x2="54" y2="21.5" stroke="black" strokeWidth="3" />
        </svg>
      </>
    )
  }
  