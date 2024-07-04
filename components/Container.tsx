import React, { PropsWithChildren, ReactNode } from 'react';

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-170px)] dark:bg-bg-colors-background ">
      {children}
    </div>
  );
};

export default Container;
