import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import chai from 'chai';

const should = chai.should();

describe('Application', function () {
    it('shows Hello World', function () {
        render(<App />);

        should.exist(screen.getByText('Hello, World!'));
    })
});