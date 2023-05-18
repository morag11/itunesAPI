// import { render, cleanup } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchForm from './components/SearchForm';
import fetch from 'isomorphic-fetch'
import axios from "axios";

//Snapshot test of initial page
test('Renders without crashing', () => {
    const tree = renderer.create(<SearchForm />).toJSON();
    expect(tree).toMatchSnapshot();
})

//Check the API itself is working
describe('Fetch API Data', () => {
test('Successfully call iTunes Search API', (done) => {
    fetch('https://itunes.apple.com/search?term=beyonce')
    .then(data => {
        expect(data).toBeDefined();
        //if status is between 200 and 300 it was successful
        expect(data.status).toBeGreaterThanOrEqual(200);
        expect(data.status).toBeLessThan(300);
        done();
    });
    });
});

//function mocking API fetch
jest.mock("axios");

export const fetchMedia = async () => {
    try {
        return await axios.get(`https://itunes.apple.com/search?term=beyonce&limit=1`);
    } catch (e) {
        return [];
    }
};

describe("fetchMedia", () => {  
    describe("when API call is successful", () => {
        it("should return media list", async () => {
        // given
            const artistId = 1419227
            axios.get.mockResolvedValueOnce(artistId);
        // when
            const result = await fetchMedia();
            console.log(result);
        // then
            expect(axios.get).toHaveBeenCalledWith(`https://itunes.apple.com/search?term=beyonce&limit=1`);
            expect(result).toEqual(artistId);
        });
    });

    describe("when API call fails", () => {
        it("should return empty list", async () => {
        // given
            const message = "Network Error";
            axios.get.mockRejectedValueOnce(new Error(message));
        // when
            const result = await fetchMedia();
        // then
            expect(axios.get).toHaveBeenCalledWith(`https://itunes.apple.com/search?term=beyonce&limit=1`);
            expect(result).toEqual([]);
        });
    });
});