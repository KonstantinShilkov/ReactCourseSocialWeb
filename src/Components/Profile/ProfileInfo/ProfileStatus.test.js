import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus"


describe("ProfileStatus component", () => {
    test("status from porps should be in the state", () => {
        const component = create (<ProfileStatus status="status test text" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("status test text");
    });

    test("after creation span with correct status should be displayed ", () => {
        const component = create (<ProfileStatus status="status test text" />);
        const root = component.root;
        const span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("after creation span with correct status should be displayed ", () => {
        const component = create (<ProfileStatus status="status test text" />);
        const root = component.root;
        const span = root.findByType("span")
        expect(span.children[1]).toBe("status test text");
    });

    test("after creation input should not be displayed  ", () => {
        const component = create (<ProfileStatus status="status test text" />);
        const root = component.root; 
        expect(()=>{
            const input = root.findByType("input")
        }).toThrow()
    });

    test("Input should be displayed in editMode instead of span", () => {
        const component = create (<ProfileStatus status="status test text" />);
        const root = component.root; 
        const span = root.findByType("span")
        span.props.onDoubleClick(); 
        const input = root.findByType("input")
        expect(input.props.value).toBe("status test text");
    });
    
    test("Callback should be called", () => {
        const mockCallback = jest.fn ();
        const component = create (<ProfileStatus status="status test text" putProfileStatus={mockCallback} />);
        const instance = component.getInstance(); 
        instance.offEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });

}); 