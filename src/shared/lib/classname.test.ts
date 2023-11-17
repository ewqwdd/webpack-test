import { classNames } from 'shared/lib/classname'

describe('classnames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass ')
    })
})
