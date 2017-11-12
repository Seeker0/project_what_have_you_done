'use strict';

class HouseMember {
  constructor(member) {
    if (member.current_party === 'D') {
      this.party = 'Democratic';
    } else {
      this.party = 'Republican';
    }
    this.name = `${member['first_name']} ${member['last_name']}`;
    this.title = 'Representative';
    this.state = member.roles[0].state;
    this.district = member.roles[0].district;
    this.id = member.member_id;
    this.phone = member.roles[0].phone;
    this.website = member.url;
    this.photo = `/images/${member.member_id}.jpg`;
    this.soloUrl = `/legislators/id/${member.member_id}`;
  }
}

class SenateMember {
  constructor(member) {
    if (member.current_party === 'D') {
      this.party = 'Democratic';
    } else {
      this.party = 'Republican';
    }
    this.name = `${member.first_name} ${member.last_name}`;
    this.title = 'Senator';
    this.state = member.roles[0].state;
    this.id = member.member_id;
    this.phone = member.roles[0].phone;
    this.website = member.url;
    this.photo = `/images/${member.member_id}.jpg`;
    this.soloUrl = `/legislators/id/${member.member_id}`;
  }
}

class Votes {
  constructor(data) {
    this.title = data.bill.title;
    this.bill_id = data.bill.bill_id;
    this.bill_url = data.bill.bill_uri;
    this.description = data.description;
    this.position = data.position;
    this.result = data.result;
  }
}

module.exports = {
  HouseMember,
  SenateMember,
  Votes
};
