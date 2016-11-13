import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

export const Person = new Mongo.Collection('person');


if(Meteor.isServer){
    Meteor.publish('person', function publishPerson(){
        return Person.find();
    });

    Accounts.onCreateUser(function(options, user){
        console.log("here " + user._id);
        Meteor.call('person.insert',user._id);
        return user;
    });
}

Meteor.methods({
    'person.insert'(userId){
        if(!userId){
            throw new Meteor.Error("not-authorized");
        }
        // Validate that text is a string
        check(userId, String);

        Person.insert({
            user: userId,
            createdAt: new Date(),
        });
    }
});

