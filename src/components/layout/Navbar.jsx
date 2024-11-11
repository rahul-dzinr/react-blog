import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 bg-white dark:bg-gray-900">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">
        <div className="md:col-span-3">
          <Link className="flex-none text-xl inline-block font-semibold text-gray-800 dark:text-white" to="/" aria-label="Preline">
            <svg className="w-28 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091Z" className="fill-gray-800 dark:fill-white" />
              <path d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12" className="stroke-gray-800 dark:stroke-white" strokeWidth="2" />
              <path d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12" className="stroke-gray-800 dark:stroke-white" strokeWidth="2" />
              <circle cx="13" cy="16.5214" r="5" className="fill-gray-800 dark:fill-white" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <Link
            to="/login"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:ring-neutral-700"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-gray-800 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-800"
          >
            Sign up
          </Link>

          <div className="md:hidden">
            <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700" id="hs-navbar-hcail-collapse" data-hs-collapse="#hs-navbar-hcail">
              <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              <svg className="hs-collapse-open:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>

        <div id="hs-navbar-hcail" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <Link className="relative inline-block text-gray-800 focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white" to="/work" aria-current="page">Work</Link>
            </div>
            <div>
              <Link className="inline-block text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-gray-300" to="/services">Services</Link>
            </div>
            <div>
              <Link className="inline-block text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-gray-300" to="/about">About</Link>
            </div>
            <div>
              <Link className="inline-block text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-gray-300" to="/careers">Careers</Link>
            </div>
            <div>
              <Link className="inline-block text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-gray-300" to="/blog">Blog</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;