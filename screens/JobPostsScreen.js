import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import OcticonIcon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { sharedStyles } from "../styles";
import { FooterBar } from "../components/FooterBar";

const JobPostsScreen = ({ navigation }) => {
  // State management for search bar
  const [text, setText] = useState("");
  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  // State management for Job Filters
  const [filters, setFilters] = useState({});
  const [jobs, setJobs] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      // Dummy data, will be replaced by API call.
      const jobsData = [
        {
          id: "1",
          title: "Job 1",
          company: "Google Inc.",
          experience: "0-1 yrs",
          package: "3.4 - 4 LPA",
          jobType: "In office",
          totalApplicants: 26,
          location: "Mumbai",
          postingTimestamp: 10,
          logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-48.png",
        },
        {
          id: "2",
          title: "Job 2",
          company: "Microsoft Inc.",
          experience: "0-1 yrs",
          package: "3.4 - 4 LPA",
          jobType: "In office",
          totalApplicants: 26,
          location: "Mumbai",
          postingTimestamp: 10,
          logo: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-48.png",
        },
        {
          id: "3",
          title: "Job 3",
          company: "Netflix Inc.",
          experience: "0-1 yrs",
          package: "3.4 - 4 LPA",
          jobType: "In office",
          totalApplicants: 26,
          location: "Mumbai",
          postingTimestamp: 10,
          logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-48.png",
        },
        {
          id: "4",
          title: "Job 4",
          company: "IBM Pvt. Ltd.",
          experience: "0-1 yrs",
          package: "3.4 - 4 LPA",
          jobType: "In office",
          totalApplicants: 26,
          location: "Mumbai",
          postingTimestamp: 6,
          logo: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/ibm-48.png",
        },
        {
          id: "5",
          title: "Job 5",
          company: "Zapier Inc.",
          experience: "0-1 yrs",
          package: "3.4 - 4 LPA",
          jobType: "Remote",
          totalApplicants: 26,
          location: "Anywhere",
          postingTimestamp: 7,
          logo: "https://cdn.iconscout.com/icon/free/png-48/free-zapier-282557.png",
        },
      ];

      if (Object.keys(filters).length === 0) {
        setJobs(jobsData);
      } else {
        setJobs([]);
      }
    }

    fetchJobs();
  }, [filters]);

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />

        <Text style={[{ color: "white", marginLeft: 10 }, styles.bold14]}>
          {"User_Name"}
        </Text>
      </View>

      {/* Main Content In Middle Area */}
      <View style={[styles.mainContentContainer]}>
        <Text style={sharedStyles.titleBold}>{"Find a job"}</Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <OcticonIcon name="search" color="black" size={25} />
          <TextInput
            style={{ width: "75%" }}
            placeholder="Search jobs"
            onChangeText={handleTextChange}
            value={text}
          />

          {/* Filter Button*/}
          <Pressable
            android_ripple={{
              color: "black",
              foreground: true,
            }}
            style={styles.filterButton}
            onPress={() => setIsFilterVisible(true)}
          >
            <OcticonIcon name="filter" color="white" size={18} />
          </Pressable>
        </View>

        {/* Filter Popup */}
        <FilterPopup
          isVisible={isFilterVisible}
          onClose={() => setIsFilterVisible(false)}
          onApply={handleApplyFilters}
        />

        {/* List of Jobs */}
        <FlatList
          data={jobs}
          renderItem={({ item, index }) => {
            const currentStyle =
              index % 2 === 0 ? styles.cardEven : styles.cardOdd;
            return <JobCard item={item} cardStyle={currentStyle} />;
          }}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            {
              alignItems: "center",
              paddingTop: 25,
            },
          ]}
        />
      </View>

      <FooterBar navigation={navigation} />
    </View>
  );
};

// Individual Job Card
const JobCard = ({ item, cardStyle }) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.rowSpaceBetween}>
        <Text style={sharedStyles.primaryBold}>{item.title}</Text>

        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri: item.logo,
          }}
        />
      </View>

      <Text style={sharedStyles.secondaryNormal}>{item.company}</Text>

      <View style={styles.rowSpaceBetween}>
        <Text style={[sharedStyles.secondaryNormal, styles.tag]}>
          {"Experience " + item.experience}
        </Text>

        <Text style={[sharedStyles.secondaryNormal, styles.tag]}>
          {item.package}
        </Text>

        <Text style={[sharedStyles.secondaryNormal, styles.tag]}>
          {item.jobType}
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <OcticonIcon name="clock" size={20} color="black" />

        <Text style={[sharedStyles.secondaryNormal, { marginLeft: 10 }]}>
          {"Be in the first"}
        </Text>

        <Text style={[sharedStyles.secondaryBold, { marginLeft: 5 }]}>
          {item.totalApplicants + 5 + " applicants"}
        </Text>
      </View>

      <View style={[{ marginTop: 20 }, styles.rowSpaceBetween]}>
        <Text style={sharedStyles.secondaryNormal}>{item.location}</Text>

        <Text style={sharedStyles.secondaryNormal}>
          {item.postingTimestamp + " Hours Ago"}
        </Text>
      </View>
    </View>
  );
};

const FilterPopup = ({ isVisible, onClose, onApply }) => {
  const [jobRoleFilter, setJobRoleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [remoteJobFilter, setRemoteJobFilter] = useState(true);
  const [onSiteJobFilter, setOnSiteJobFilter] = useState(true);

  const handleApplyFilters = () => {
    onApply({
      jobRoleFilter,
      locationFilter,
      salaryFilter,
      experienceFilter,
      remoteJobFilter,
      onSiteJobFilter,
    });
    onClose();
  };

  const handleClearFilters = () => {
    setJobRoleFilter("");
    setLocationFilter("");
    setSalaryFilter("");
    setExperienceFilter("");
    setRemoteJobFilter(true);
    setOnSiteJobFilter(true);
    onApply({});
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Job Role</Text>
          <TextInput
            placeholder="e.g React Native Developer"
            value={jobRoleFilter}
            onChangeText={(text) => setJobRoleFilter(text)}
            style={styles.filterInput}
          />

          <Text>Location</Text>
          <TextInput
            placeholder="e.g Mumbai"
            value={locationFilter}
            onChangeText={(text) => setLocationFilter(text)}
            style={styles.filterInput}
          />

          <Text>Annual Salary (LPA)</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Annual salary expectation"
            value={salaryFilter}
            onChangeText={(text) => setSalaryFilter(text)}
            style={styles.filterInput}
          />

          <Text>Years of Experience</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Required years of experience"
            value={experienceFilter}
            onChangeText={(text) => setExperienceFilter(text)}
            style={styles.filterInput}
          />

          <CheckBox
            onPress={() => setRemoteJobFilter(!remoteJobFilter)}
            title="Remote"
            isChecked={remoteJobFilter}
          />
          <CheckBox
            onPress={() => setOnSiteJobFilter(!onSiteJobFilter)}
            title="On-site"
            isChecked={onSiteJobFilter}
          />

          <View style={[styles.rowSpaceBetween, { marginTop: 10 }]}>
            <TouchableOpacity onPress={onClose} style={{ padding: 10 }}>
              <Text style={{ color: "red" }}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleClearFilters}
              style={{ padding: 10 }}
            >
              <Text style={styles.modalButton}>Clear All</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleApplyFilters}
              style={{ padding: 10 }}
            >
              <Text style={styles.modalButton}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const CheckBox = (props) => {
  const iconName = props.isChecked
    ? "checkbox-marked"
    : "checkbox-blank-outline";

  return (
    <Pressable
      onPress={props.onPress}
      style={[{ color: "#000", marginLeft: 5 }, styles.checkBoxComponent]}
    >
      <MaterialCommunityIcons name={iconName} size={24} color="#000" />
      <Text style={[styles.checkBoxTitle, sharedStyles.secondaryNormal]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight, // Ensures content starts below status bar
  },

  header: {
    height: "6.5%",
    minHeight: 50,
    width: "100%",
    backgroundColor: "#244A61",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },

  mainContentContainer: {
    width: "100%",
    height: "87%",
    paddingTop: 30,
    paddingHorizontal: 37,
  },

  searchBar: {
    flexDirection: "row",
    backgroundColor: "#DBDBDB",
    width: "100%",
    height: "5.4%",
    minHeight: 41,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },

  card: {
    // Using fixed values for width/height because % values seems to be not taking
    // FlatList as their direct parent for calculating dimensions.
    // Goal is find root cause and possibly use proportional(%) values.
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 24,
    padding: 20,
  },

  cardEven: {
    backgroundColor: "#FAE2D2",
  },

  cardOdd: {
    backgroundColor: "#E1D4FD",
  },
  tag: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalButton: {
    color: "blue",
  },

  filterInput: {
    borderWidth: 1,
    paddingVertical: 1,
    paddingLeft: 10,
    marginVertical: 10,
  },
  checkBoxComponent: {
    flexDirection: "row",
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterButton: {
    overflow: "hidden",
    backgroundColor: "#244A61",
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobPostsScreen;
