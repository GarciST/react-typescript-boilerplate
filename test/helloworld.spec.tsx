import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import chai = require('chai');
var should = chai.should();

describe('Application', function () {
    it('shows Hellow World', function () {
        render(<App />);

        should.exist(screen.getByText('Hello, World!'));
    })
});