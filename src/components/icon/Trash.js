import React from 'react';

Trash.defaultProps = {
     height: '100%',
     width: '100%',
     fill: 'cyan',
     viewBox: '0 0 31.5 36',
     alt: 'trash'
}


export default function Trash(props) {
     return (
          <svg
               className={props.className}
               onClick={props.onClick}
               xmlns="http://www.w3.org/2000/svg"
               width={props.width}
               height={props.height}
               fill={props.fill}
               viewBox={props.viewBox}
               alt={props.alt}
          >
               <path
                    id="Icon_awesome-trash-alt"
                    data-name="Icon awesome-trash-alt"
                    d="M2.25,32.625A3.375,3.375,0,0,0,5.625,36h20.25a3.375,3.375,0,0,0,3.375-3.375V9h-27Zm19.125-18a1.125,1.125,0,0,1,2.25,0v15.75a1.125,1.125,0,0,1-2.25,0Zm-6.75,0a1.125,1.125,0,0,1,2.25,0v15.75a1.125,1.125,0,0,1-2.25,0Zm-6.75,0a1.125,1.125,0,0,1,2.25,0v15.75a1.125,1.125,0,0,1-2.25,0ZM30.375,2.25H21.938L21.277.935A1.688,1.688,0,0,0,19.765,0H11.728a1.668,1.668,0,0,0-1.5.935L9.563,2.25H1.125A1.125,1.125,0,0,0,0,3.375v2.25A1.125,1.125,0,0,0,1.125,6.75h29.25A1.125,1.125,0,0,0,31.5,5.625V3.375A1.125,1.125,0,0,0,30.375,2.25Z" />
          </svg>
     );
}