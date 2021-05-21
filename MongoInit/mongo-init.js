print('=============== START INIT SCRIPT ===============');
db = db.getSiblingDB("SocialCode");
db.createCollection("Users");
db.createCollection("Posts");
db.createCollection("Comments");
db.createUser({user: "socialCode", pwd: "password", roles:[{db:"SocialCode", role:"readWrite"}]});
print('=============== END INIT SCRIPT ===============');
