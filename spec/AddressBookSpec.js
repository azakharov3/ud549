describe("AddressBook", function () {
    var addrBook;
    var contact;

    beforeEach(function () {
        addrBook = new AddressBook();
        contact = new Contact();
    });

    it("should be able to add a contact", function () {
        addrBook.addContact(contact);
        expect(addrBook.getContact(0)).toBe(contact);
    });

    it("should be able to delete a contact", function () {
        addrBook.addContact(contact);
        addrBook.deleteContact(0);
        expect(addrBook.getContact(0)).not.toBeDefined();
    });
});

describe("Async Address Book", function () {
    var addressBook = new AddressBook();

    beforeEach(function (done){
        addressBook.getInitialContacts(function () {
            done();
        });
    });

    it("should grab initial contacts", function (done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});