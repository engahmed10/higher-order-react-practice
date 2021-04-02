import { render } from '@testing-library/react';
import App from './App';
import {shallow}  from 'enzyme';
import Movies  from "./components/movies"
import Songs  from "./components/songs"

import AddSong  from './components/addsong'
import {mount }  from 'enzyme'


 let wrapped=null ;

beforeEach(()=>{

  wrapped=shallow(<App/>)
})

afterEach(()=>{

  wrapped.unmount();
})

it('chceks App by using enzyme lib and shallow render type',()=>{
 
   expect(wrapped.find(Movies).length).toEqual(1)
})

it('chceks App by using enzyme lib and shallow render type',()=>{
 
 expect(wrapped.find(Songs).length).toEqual(1)
})

