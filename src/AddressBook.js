var AddressBook = function () {
    this.Contacts = [];
};
AddressBook.prototype.addContact = function(contact){
    this.Contacts.push(contact);
}
AddressBook.prototype.getContact = function(contactIndex){
    return this.Contacts[contactIndex]
}
