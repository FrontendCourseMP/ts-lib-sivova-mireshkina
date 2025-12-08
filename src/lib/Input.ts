class Input {
    private element:HTMLInputElement
    private messages:Partial<Record<keyof ValidityState, string>> = {}

    constructor(element:HTMLInputElement) {
        this.element=element
    }
    min(message: string) {

        const checkType = this.element.getAttribute('type');
    
        if (checkType !== 'number' && checkType !== 'range')  {
            if (!this.element.getAttribute('minlength')) {
                throw new Error('у тега инпут нет атрибута minlength')
            }
        
            this.messages.tooShort=message

        } else {
            if (!this.element.getAttribute('min')) {
                throw new Error('у тега инпут нет атрибута min')
            }
            this.messages.rangeUnderflow=message
        }
        return this
    }
      max(message: string) {

        const checkType = this.element.getAttribute('type');
    
        if (checkType !== 'number' && checkType !== 'range')  {
            if (!this.element.getAttribute('maxlength')) {
                throw new Error('у тега инпут нет атрибута maxlength')
            }
        
            this.messages.tooLong=message

        } else {
            if (!this.element.getAttribute('max')) {
                throw new Error('у тега инпут нет атрибута max')
            }
            this.messages.rangeOverflow=message
        }
        return this
    }
    required(message:string) {
        if (!this.element.required) {
            throw new Error('у тега инпут нет атрибута required')
        }
        this.messages.valueMissing=message
        return this
    }
    pattern(message:string) {
        if (this.element.pattern === '') {
            throw new Error('у тега инпут нет атрибута pattern')
        }
        this.messages.patternMismatch=message
    }
    // validate(callback:(data:FormData)=>void) {

    // }
}