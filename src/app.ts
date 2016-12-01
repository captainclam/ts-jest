import * as moment from 'moment'
import * as angular from 'angular'
import * as _ from 'lodash'

class Person {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

let person = new Person('simon')

console.log(person.getName());

const app = angular.module('app', [])
let m = moment()

app.run([
    '$rootScope',
    ($rootScope) => {
        $rootScope.title = m.add('days', 20).fromNow()
    }
])


// app.run($rootScope => $rootScope.title = m.add('days', 20).fromNow())

export default Person