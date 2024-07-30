// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface HiringContextType {
//   isHiring: boolean;
//   setIsHiring: (state: boolean) => void;
// }

// const HiringContext = createContext<HiringContextType | undefined>(undefined);

// export const HiringProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [isHiring, setIsHiring] = useState<boolean>(false);

//   return (
//     <HiringContext.Provider value={{ isHiring, setIsHiring }}>
//       {children}
//     </HiringContext.Provider>
//   );
// };

// export const useHiring = (): HiringContextType => {
//   const context = useContext(HiringContext);
//   if (!context) {
//     throw new Error('useHiring must be used within a HiringProvider');
//   }
//   return context;
// };
