import { useState } from 'react';

const LinkedinIcon = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <svg
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        width="40"
        height="40"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.1586 6.46289V37.8871C41.1586 38.6056 40.8732 39.2947 40.3652 39.8027C39.8572 40.3107 39.1681 40.5961 38.4496 40.5961H7.02539C6.30693 40.5961 5.61788 40.3107 5.10985 39.8027C4.60182 39.2947 4.31641 38.6056 4.31641 37.8871V6.46289C4.31641 5.74443 4.60182 5.05538 5.10985 4.54735C5.61788 4.03932 6.30693 3.75391 7.02539 3.75391L38.4496 3.75391C39.1681 3.75391 39.8572 4.03932 40.3652 4.54735C40.8732 5.05538 41.1586 5.74443 41.1586 6.46289ZM15.1524 17.8406H9.73438V35.1782H15.1524V17.8406ZM15.64 11.8809C15.6428 11.471 15.5649 11.0647 15.4107 10.6849C15.2565 10.3052 15.029 9.9596 14.7413 9.66779C14.4535 9.37599 14.1111 9.14373 13.7335 8.98427C13.356 8.82481 12.9507 8.74128 12.5409 8.73844H12.4434C11.6099 8.73844 10.8107 9.06952 10.2213 9.65884C9.63202 10.2482 9.30094 11.0474 9.30094 11.8809C9.30094 12.7143 9.63202 13.5136 10.2213 14.1029C10.8107 14.6922 11.6099 15.0233 12.4434 15.0233C12.8532 15.0334 13.261 14.9626 13.6435 14.815C14.026 14.6674 14.3757 14.4459 14.6726 14.1632C14.9694 13.8804 15.2076 13.5419 15.3736 13.167C15.5396 12.7922 15.6301 12.3883 15.64 11.9784V11.8809ZM35.7407 24.6456C35.7407 19.4335 32.4249 17.4072 29.1307 17.4072C28.0522 17.3532 26.9783 17.5829 26.0162 18.0735C25.0541 18.564 24.2375 19.2982 23.6477 20.2029H23.496V17.8406H18.4031V35.1782H23.8211V25.9568C23.7428 25.0123 24.0403 24.0752 24.649 23.3488C25.2576 22.6224 26.1283 22.1656 27.0719 22.0775H27.2778C29.0007 22.0775 30.2793 23.1611 30.2793 25.8917V35.1782H35.6973L35.7407 24.6456Z"
          fill={`${isHover ? '#27AAE1' : '#3D3850'}`}
        />
      </svg>
    </>
  );
};

export default LinkedinIcon;
