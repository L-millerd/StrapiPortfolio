export interface HomePage{
  data:{
    id: number;
    attributes: {
      Name: string;
      Email: string;
      CellPhone: string;
      Website: string;
      BioSummary: string;
      FullBio: string;
      LinkedIn: string;
      Github: string;
      Behance: any;
      Logo: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
                width: number;
                height: number;
              }
            }
          }
        }
      },
      WebsiteHeroImage: {
        data: {
          attributes: {
            url: string;
            width: number;
            height: number;
          }
        }
      }
    }
  }
}

export interface Skills{
  data: [
    {
      id: number;
      attributes: {
        SkillName: string;
        SkillScore: string;
        SkillLogo: {
          data: {
            attributes: {
              formats:{
                thumbnail:{
                  url:string;
                  width:  number;
                  height: number;
                }
              }
            }
          }
        }
      }
    }
  ]
}

export interface Projects{
  data: [
    {
      id: number;
      attributes: {
        Title: string;
        Summary: string;
        Description: string;
        WebLink: string;
        //double check date format
        StartDate: string;
        EndDate: string;
        ToolsUsed: string;
        ClientName: string;
        Image: {
          data: {
            attributes: {
              name: string;
              width: number;
              height: number;
              formats: {
                thumbnail: {
                  url: string;
                }
              }
            }
          }
        }
        skills: {
          data: [
            {
              attributes: {
                SkillName: string;
                SkillScore: string;
              }
            }
          ]
        }
      }
    }
  ]
}
