import { StyleSheet, View } from "react-native";
import React from "react";

import Inner from "./Inner";
import SubHeading from "./SubHeading";
import CustomText from "./CustomText";

const Achievements = () => {
  return (
    <>
      <View style={styles.achievement}>
        <SubHeading name="EDUCATION" />
        <Inner
          organization="National Youth Service Corps"
          dateRange="2020 - 2021"
          school="(Godstime seconadary school, Obajana, Kogi state)"
        />
        <Inner
          organization="University of Benin, Benin city, Edo state"
          dateRange="2010 - 2018"
          school="(B.EngChE)"
        />
        <Inner
          organization="Okota Grammar School, Okota Isolo, Lagos"
          dateRange="2001 - 2007"
          school="(SSCE)"
        />
        <Inner
          organization="Jeed Trinity Nur/pry School, Ilasamaja, Lagos State"
          dateRange="2001 - 2007"
          school="(First School Leaving Certificate)"
        />
      </View>

      <View style={styles.achievement}>
        <SubHeading name="TRAININGS" />
        <Inner
          organization="Code with Mosh"
          dateRange="2019 - 2021"
          school="(HTML, CSS, JavaScript, ReactJS, NodeJS, Python, Django, MYSQL, 
            Git, Object Oriented Programming)"
        />
        <Inner
          organization="Mako Polaris Computer Institute, Okota, Isolo"
          dateRange="2010"
          school="(Desktop Publishing)"
        />
      </View>
      <View style={styles.achievement}>
        <SubHeading name="WORK EXPERIENCE" />
        <Inner
          organization="Lincoln University College, Nyanya, FCT, Abuja"
          dateRange="2021 - 2022"
          school="(Junior Front End Developer)"
        />
        <CustomText style={styles.text}>Duties</CustomText>
        <View style={styles.duties}>
          <CustomText>
            Determined the structure and design of web pages.
          </CustomText>
          <CustomText>Built reusable code with ReactJS.</CustomText>
          <CustomText>
            Worked in teams alongside backend developers, Graphic designers and
            UX Designers to build full stack web applications.
          </CustomText>
          <CustomText>
            Used a variety of markup languages to create the web pages.
          </CustomText>
        </View>
        <Inner
          organization="Jeed Trinity College, Ilasamaja, Isolo, Lagos State"
          dateRange="2018 - 2020"
          school="(Mathematics and Chemistry teacher )"
        />
        <CustomText style={styles.text}>Duties</CustomText>
        <View style={styles.duties}>
          <CustomText>Created lesson plans.</CustomText>
          <CustomText>Evaluated student performance.</CustomText>
          <CustomText>
            Prepared and distributed learning materials such as notes,
            assignments and quizzes .
          </CustomText>
          <CustomText>
            Planned and presented lessons to facilitate students' understanding
            and application of mathematical concepts.
          </CustomText>
        </View>
        <Inner
          organization="Femstar Manufacturing Company, Isolo, Lagos State"
          dateRange="2008 - 2010"
          school="(Quality Control Assistant)"
        />
        <CustomText style={styles.text}>Duties</CustomText>
        <View style={styles.duties}>
          <CustomText>
            Assisted in evaluating the materials routinely used during
            production process .
          </CustomText>
          <CustomText>
            Document quality assurance practices by entering data into logbooks
            .
          </CustomText>
          <CustomText>
            Ensuring finished product meet the standard market requirements .
          </CustomText>
          <CustomText>
            Making sure that the finished products are suitable for consumption.
          </CustomText>
        </View>
        <Inner
          organization="Crown Flour Mill, Apapa, Lagos "
          dateRange="2016 - 2017"
          school="(Store Keeper)"
        />
        <CustomText style={styles.text}>Duties</CustomText>
        <View style={styles.duties}>
          <CustomText>
            Ensured the correctness in the quality, quantity, specifications
            condition of the materials received from vendors.
          </CustomText>
          <CustomText>
            Received the materials ordered by the purchase department and
            supplied by the vendors in a proper maintains as per the laid down
            procedure.
          </CustomText>
          <CustomText>
            Ensured accurate accounting of the materials received and issued.
          </CustomText>
          <CustomText>
            Ensured proper stocking of materials by using appropriate method of
            care and preservation to avoid any damage and loss
          </CustomText>
        </View>
      </View>
      <View style={styles.achievement}>
        <SubHeading name="SKILLS" />
        <View>
          <CustomText>Problem solving</CustomText>
          <CustomText>Strategic Planning</CustomText>
          <CustomText>Analytical</CustomText>
          <CustomText>Creative Thinking</CustomText>
          <CustomText>Technical</CustomText>
          <CustomText>Verbal and written communication</CustomText>
        </View>
      </View>
      <View style={styles.achievement}>
        <SubHeading name="PERSONAL DATA" />
        <View>
          <CustomText>Sex:</CustomText>
          <CustomText>State of Origin : Cross River</CustomText>
          <CustomText>Place of Birth : Lagos</CustomText>
          <CustomText>Marital Status : Single</CustomText>
          <CustomText>Religion : Christianity</CustomText>
        </View>
      </View>
      <View style={styles.achievement}>
        <SubHeading name="INTEREST" />
        <View>
          <CustomText>Regional Development</CustomText>
          <CustomText>Travelling</CustomText>
          <CustomText>Socializing</CustomText>
        </View>
      </View>
      <View style={styles.achievement}>
        <SubHeading name="REFEREES" />
        <View>
          <CustomText>Available on Request</CustomText>
        </View>
      </View>
    </>
  );
};

export default Achievements;

const styles = StyleSheet.create({
  achievement: {
    marginTop: 10,
  },
  duties: {
    padding: 10,
  },
  text: {
    fontWeight: "700",
    fontStyle: "italic",
  },
});
