export interface PlayerModel {
  id: Number;
  name: String;
  Clube: String;
  position: String;
  statistics: {
    Overall: Number;
    Pace: Number;
    Shooting: Number;
    Passing: Number;
    Dribbling: Number;
    Defending: Number;
    Physicality: Number;
  };
}
