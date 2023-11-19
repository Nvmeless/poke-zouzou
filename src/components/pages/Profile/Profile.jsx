import React, { useEffect, useState } from "react";
import { UserCard } from "../../organisms";
import { Ranch, TeamInventory } from "../../molecules";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });

  const [monsters, setMonsters] = useState(user?.user?.pokemon);

  useEffect(() => {
    setMonsters(user?.user?.pokemon);
  }, [user]);

  return (
    <div>
      <UserCard></UserCard>
      <TeamInventory items={monsters}></TeamInventory>
      <Ranch items={monsters}></Ranch>
    </div>
  );
};

export default Profile;
