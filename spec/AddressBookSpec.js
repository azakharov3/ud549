describe("AddressBook", function () {
    it("should be able to add a contact", function () {
        var addrBook = new AddressBook();
        var contact = new Contact();
        addrBook.addContact(contact);
        expect(addrBook.getContact(0)).toBe(contact);
    });
});