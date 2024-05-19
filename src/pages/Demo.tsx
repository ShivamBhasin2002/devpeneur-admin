import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Demo: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Demo" />
      <div className='flex gap-6'>
        <div className="iinline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 max-w-fit">
          Show Loader
        </div>
        <div className="iinline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 max-w-fit">
          Use User Story
        </div>
        <div className="iinline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 max-w-fit">
          Show Loader
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Demo;
